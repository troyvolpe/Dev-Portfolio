#!/bin/bash

echo "🔍 Troubleshooting Visitor Logger..."
echo "=================================="

# Check if visitor logger is running
echo "1. Checking if visitor logger process is running:"
pm2 list | grep visitor-logger || echo "❌ Visitor logger not found in PM2"

# Check if port 3001 is listening
echo -e "\n2. Checking if port 3001 is listening:"
netstat -tlnp | grep :3001 || ss -tlnp | grep :3001 || echo "❌ Port 3001 not listening"

# Test local connection
echo -e "\n3. Testing local connection to visitor logger:"
curl -X POST http://localhost:3001/log-visit \
  -H "Content-Type: application/json" \
  -d '{"timestamp":"'$(date -Iseconds)'","page":"test"}' \
  2>/dev/null && echo "✅ Local connection works" || echo "❌ Local connection failed"

# Check nginx configuration
echo -e "\n4. Checking nginx configuration:"
if [ -f /etc/nginx/sites-enabled/troyvolpe.com ]; then
    echo "✅ Nginx site configuration exists"
    sudo nginx -t 2>/dev/null && echo "✅ Nginx config is valid" || echo "❌ Nginx config has errors"
else
    echo "❌ Nginx site configuration missing"
fi

# Test API endpoint through nginx
echo -e "\n5. Testing API endpoint through nginx:"
curl -X POST https://troyvolpe.com/api/log-visit \
  -H "Content-Type: application/json" \
  -d '{"timestamp":"'$(date -Iseconds)'","page":"test"}' \
  2>/dev/null && echo "✅ API endpoint works" || echo "❌ API endpoint failed"

# Check recent logs
echo -e "\n6. Recent visitor logs:"
if [ -f ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log ]; then
    echo "Last 5 entries:"
    tail -5 ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log
else
    echo "❌ No visitor log file found"
fi

# Check PM2 logs
echo -e "\n7. PM2 visitor logger logs (last 10 lines):"
pm2 logs visitor-logger --lines 10 --nostream 2>/dev/null || echo "❌ No PM2 logs available"

echo -e "\n=================================="
echo "🔧 Quick fixes to try:"
echo "1. Restart visitor logger: cd ~/Dev-Portfolio/dev-portfolio/src/visitor-logger && pm2 restart visitor-logger"
echo "2. Check firewall: sudo ufw status"
echo "3. View live logs: pm2 logs visitor-logger"
echo "4. Test manually: curl -X POST http://localhost:3001/log-visit -H 'Content-Type: application/json' -d '{\"test\":true}'"