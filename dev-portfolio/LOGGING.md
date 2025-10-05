# 📋 Logging Overview for Troy's Portfolio

## 🗂️ **Where All Logs Go**

### **Local Development Logs:**
```
📁 /Users/troy/Dev_Portfolio/dev-portfolio/src/visitor-logger/
└── 📄 visitors.log (Visitor analytics data)
```

### **Raspberry Pi Production Logs:**
```
📁 ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/
├── 📄 visitors.log (Visitor analytics data)
└── 📄 PM2 logs (see commands below)

📁 /var/log/
├── 📄 nginx/access.log (Web server access logs)
├── 📄 nginx/error.log (Web server error logs)
└── 📄 syslog (System logs)

📁 ~/.pm2/logs/
├── 📄 visitor-logger-out.log (PM2 stdout)
├── 📄 visitor-logger-error.log (PM2 stderr)
└── 📄 pm2.log (PM2 system logs)
```

---

## 📊 **Log Types & Purposes**

### **1. Visitor Analytics (`visitors.log`)**
- **Location**: `src/visitor-logger/visitors.log`
- **Purpose**: Tracks website visits with privacy-compliant data
- **Format**: JSON lines
- **Contains**: 
  - IP address (anonymized)
  - User agent
  - Timestamp
  - Page visited

**Example Entry:**
```json
{"ip":"::1","userAgent":"Mozilla/5.0...","timestamp":"2025-10-05T20:02:39.369Z"}
```

### **2. PM2 Process Logs**
- **Location**: `~/.pm2/logs/`
- **Purpose**: Monitor visitor logger backend service
- **Types**:
  - `visitor-logger-out.log`: Normal output
  - `visitor-logger-error.log`: Error messages
  - `pm2.log`: PM2 system messages

### **3. Nginx Web Server Logs**
- **Location**: `/var/log/nginx/`
- **Purpose**: Web server access and error tracking
- **Types**:
  - `access.log`: All HTTP requests
  - `error.log`: Server errors and issues

### **4. System Logs**
- **Location**: `/var/log/syslog`
- **Purpose**: Overall system health and issues

---

## 🔧 **Log Management Commands**

### **View Visitor Analytics:**
```bash
# View all visitor data
cat ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log

# View last 10 visits
tail -10 ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log

# Count total visits
wc -l ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log

# View visits from today
grep $(date +%Y-%m-%d) ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log
```

### **Monitor PM2 Service:**
```bash
# View live logs
pm2 logs visitor-logger

# View last 20 lines
pm2 logs visitor-logger --lines 20

# Monitor specific log files
pm2 logs visitor-logger --err    # Only errors
pm2 logs visitor-logger --out    # Only output
```

### **Check Nginx Logs:**
```bash
# Recent access logs
sudo tail -20 /var/log/nginx/access.log

# Recent errors
sudo tail -20 /var/log/nginx/error.log

# Monitor live traffic
sudo tail -f /var/log/nginx/access.log
```

### **System Health:**
```bash
# System logs
sudo tail -20 /var/log/syslog

# Service status
systemctl status nginx
pm2 status
```

---

## 📈 **Log Analysis Examples**

### **Visitor Analytics Queries:**
```bash
# Most common browsers
cat visitors.log | jq -r '.userAgent' | cut -d' ' -f1 | sort | uniq -c | sort -nr

# Visits by hour
cat visitors.log | jq -r '.timestamp' | cut -dT -f2 | cut -d: -f1 | sort | uniq -c

# Unique visitors (approximate)
cat visitors.log | jq -r '.ip' | sort | uniq | wc -l
```

### **Error Monitoring:**
```bash
# Recent PM2 errors
pm2 logs visitor-logger --err --lines 50

# Nginx error patterns
sudo grep "ERROR\\|WARN" /var/log/nginx/error.log | tail -10

# Failed visitor logging attempts
pm2 logs visitor-logger | grep -i error
```

---

## 🛠️ **Log Maintenance**

### **Rotate/Archive Logs:**
```bash
# Archive old visitor data
mv visitors.log visitors-$(date +%Y%m%d).log

# Compress old logs
gzip visitors-*.log

# Start fresh
touch visitors.log
```

### **Clean Up PM2 Logs:**
```bash
# Clear all PM2 logs
pm2 flush

# Restart with fresh logs
pm2 restart visitor-logger
```

### **Monitor Disk Usage:**
```bash
# Check log directory sizes
du -sh ~/.pm2/logs/
du -sh /var/log/nginx/
du -sh ~/Dev-Portfolio/dev-portfolio/src/visitor-logger/
```

---

## 🚨 **Troubleshooting Log Issues**

### **If Visitor Logging Isn't Working:**
1. Check PM2 status: `pm2 status`
2. View PM2 errors: `pm2 logs visitor-logger --err`
3. Test endpoint: `curl -X POST http://localhost:3001/log-visit`
4. Check file permissions: `ls -la visitors.log`

### **If No Logs Appearing:**
1. Verify service is running: `pm2 list`
2. Check if port is listening: `netstat -tlnp | grep 3001`
3. Review nginx proxy: `sudo nginx -t`
4. Test API endpoint: Run `./debug-logging.sh`

---

## 📍 **Quick Log Locations Summary**

| Log Type | Local Path | Pi Path | Purpose |
|----------|------------|---------|---------|
| **Visitor Data** | `src/visitor-logger/visitors.log` | `~/Dev-Portfolio/dev-portfolio/src/visitor-logger/visitors.log` | Analytics |
| **PM2 Service** | N/A | `~/.pm2/logs/visitor-logger-*.log` | Backend monitoring |
| **Web Server** | N/A | `/var/log/nginx/*.log` | HTTP requests/errors |
| **System** | N/A | `/var/log/syslog` | Overall system health |

Use the `debug-logging.sh` script for comprehensive log analysis! 🔍