#!/bin/bash

echo "🚀 Starting Troy's Portfolio Site..."

# 1. Start Cloudflare Tunnel
echo "🔐 Starting Cloudflare Tunnel..."
cloudflared tunnel run Dev-Portfolio-Tunnel &

# 2. Start visitor logger backend
echo "📊 Starting visitor logger..."
cd ~/Dev-Portfolio/dev-portfolio/src/visitor-logger
npm install
pm2 start server.js --name visitor-logger

# 3. Rebuild React frontend
echo "🛠️ Building React frontend..."
cd ~/Dev-Portfolio/dev-portfolio
npm install
npm run build

# 4. Deploy to Nginx with API proxy configuration
echo "📦 Deploying to Nginx..."
sudo rm -rf /var/www/Dev-Portfolio/*
sudo cp -r build/* /var/www/Dev-Portfolio/
sudo chown -R www-data:www-data /var/www/Dev-Portfolio
sudo chmod -R 755 /var/www/Dev-Portfolio

# Copy nginx configuration if it doesn't exist
if [ ! -f /etc/nginx/sites-available/troyvolpe.com ]; then
    echo "⚙️ Setting up Nginx configuration..."
    sudo cp nginx-site.conf /etc/nginx/sites-available/troyvolpe.com
    sudo ln -sf /etc/nginx/sites-available/troyvolpe.com /etc/nginx/sites-enabled/
    sudo nginx -t && echo "✅ Nginx config valid"
fi

sudo systemctl restart nginx

echo "✅ All systems live at https://troyvolpe.com"
