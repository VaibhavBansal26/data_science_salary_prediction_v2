# Data Science Salary Prediction 

Front End Deployment On Firebase
==============================
https://datascience-salary-vb.web.app/

Airflow : https://3.90.178.242:8080

Sparks : https://3.90.178.242:8081

Flask: https://3.90.178.242:5001

Tech Stack
================
1. Apache Spark
2. Kafka
3. Postgresql
4. Python
5. Snowflake
6. Firebase
7. Linear Regression
8. Machine Learning
9. Redis
10. S3
11. Airflow
12. ZOOKEEPER
13. Flask
14. React JS
15. AWS EC2
16. Github CI/CD
17. Docker
18. Docker Compose
19. mlflow

Security Groups Open Ports : 7077, 8080, 8081, 9092, 5432, 6379, 80, 22, 443, 465, 5001

System Architecture
================

![Alternative Text](https://datascience-salary-vb.web.app/static/media/diagram4.b99fdf0c9c41947d165a.png "Optional Title")



Demo Video
================
[![Watch the video](http://img.youtube.com/vi/1Ca0Y4s37ls/0.jpg)]("https://www.youtube.com/watch?v=1Ca0Y4s37ls)


KEY Commands:
================
sudo apt-get update

sudo apt-get install -y git

# Update packages

sudo apt-get update

# Install Docker

sudo apt-get install -y docker.io

sudo systemctl start docker

sudo systemctl enable docker

# Install Docker Compose (if not installed via apt)

sudo apt-get install -y docker-compose


ls -ld ./logs

sudo chown -R 50000:50000 ./logs

sudo chmod -R 777 ./logs


SSL

sudo apt-get update

sudo apt-get install nginx

sudo apt-get install certbot python3-certbot-nginx

sudo certbot --nginx -d yourdomain.com

sudo certbot renew

server {

    listen 80;
    server_name yourdomain.com;
    return 301 https://$host$request_uri;
}

server {

    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5001;  # Assuming Flask is accessible on port 5001
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

CASE NO Domain:

# Generate Self-Signed Certificate

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/selfsigned.key \
  -out /etc/ssl/certs/selfsigned.crt


sudo nano /etc/nginx/sites-available/flask_api

# Redirect HTTP traffic to HTTPS

server {

    listen 80;
    server_name 3.90.178.242;  # Replace with your IP or domain if you have one
    return 301 https://$host$request_uri;
}

# Serve the Flask API over HTTPS

server {

    listen 443 ssl;
    server_name your_server;

    # Specify the locations of your self-signed certificate and key
    ssl_certificate /etc/ssl/certs/selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/selfsigned.key;

    # (Optional) Improve SSL security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        # Proxy pass to the Flask API running on port 5001
        proxy_pass http://localhost:5001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}


sudo ln -s /etc/nginx/sites-available/flask_api /etc/nginx/sites-enabled/

sudo rm /etc/nginx/sites-enabled/default

sudo nginx -t

sudo systemctl reload nginx


====================
Verify Docker Daemon Is Running

```
sudo systemctl status docker
sudo systemctl start docker
```
 Test with Elevated Permissions

 ```
 sudo docker ps
 ```

Check Docker Socket Permissions

```
ls -l /var/run/docker.sock

```
srw-rw---- 1 root docker 0 ... /var/run/docker.sock. This means that any user in the docker group can access it.

Add Your User to the Docker Group

```
sudo usermod -aG docker $USER
```

Docker Cleanup

```
df -h
sudo apt-get clean
sudo du -sh /var/log/*
sudo truncate -s 0 /var/log/your-large-log.log
sudo docker system prune -a
sudo usermod -aG docker $USER # Docker permissions issue fix
```

# Cron Job

```
 crontab -e
 1: /bin/nano
 0 3 * * 0 /usr/bin/truncate -s 0 /home/ubuntu/docker_maintenance.log && cd /home/ubuntu/data_science_salary_prediction_v2 && /usr/bin/docker-compose down -v && /usr/bin/docker system prune -af && /usr/bin/docker-compose up -d >> /home/ubuntu/docker_maintenance.log 2>&1
```
