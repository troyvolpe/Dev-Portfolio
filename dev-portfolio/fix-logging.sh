#!/bin/bash

echo "🔧 Fixing Visitor Logger Issues..."
echo "=================================="

# 1. Install PM2 globally if not present
echo "📦 Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
    echo "✅ PM2 installed"
else
    echo "✅ PM2 already installed"
fi

# 2. Stop any existing processes
echo "🛑 Stopping existing processes..."
pm2 stop visitor-logger 2>/dev/null || echo "No existing visitor-logger process"
pm2 delete visitor-logger 2>/dev/null || echo "No existing visitor-logger process to delete"

# 3. Start visitor logger
echo "🚀 Starting visitor logger..."
cd ~/Dev-Portfolio/dev-portfolio/src/visitor-logger
npm install
pm2 start server.js --name visitor-logger
pm2 save
pm2 startup

# 4. Update nginx configuration
echo "⚙️ Updating nginx configuration..."
sudo cp ~/Dev-Portfolio/dev-portfolio/nginx-site.conf /etc/nginx/sites-available/troyvolpe.com
sudo ln -sf /etc/nginx/sites-available/troyvolpe.com /etc/nginx/sites-enabled/

# Remove default nginx site if it exists
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
if sudo nginx -t; then
    echo "✅ Nginx configuration valid"
    sudo systemctl reload nginx
    echo "✅ Nginx reloaded"
else
    echo "❌ Nginx configuration error - check the config"
    exit 1
fi

# 5. Check if everything is working
echo "🔍 Testing setup..."
sleep 3

# Check PM2 status
echo "PM2 Status:"
pm2 status

# Check if port 3001 is listening
echo "Port 3001 status:"
if netstat -tlnp 2>/dev/null | grep :3001 || ss -tlnp 2>/dev/null | grep :3001; then
    echo "✅ Port 3001 is listening"
else
    echo "❌ Port 3001 not listening"
fi

# Test local endpoint
echo "Testing local endpoint:"
if curl -s -X POST http://localhost:3001/log-visit -H "Content-Type: application/json" -d '{"test":true}' > /dev/null; then
    echo "✅ Local endpoint working"
else
    echo "❌ Local endpoint failed"
fi

echo "=================================="
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Rebuild and redeploy your React app: cd ~/Dev-Portfolio/dev-portfolio && npm run build"
echo "2. Copy build to nginx: sudo rm -rf /var/www/Dev-Portfolio/* && sudo cp -r build/* /var/www/Dev-Portfolio/"
echo "3. Set permissions: sudo chown -R www-data:www-data /var/www/Dev-Portfolio"
echo "4. Test the site: https://troyvolpe.com"
echo ""
echo "To monitor logs: pm2 logs visitor-logger"
echo "To restart: pm2 restart visitor-logger"