FROM python:3.9

WORKDIR /app

COPY requirements.txt .

# RUN python -m venv /opt/venv

RUN pip install --no-cache-dir -r requirements.txt --timeout=1000

COPY . .

EXPOSE 5000

CMD ["flask", "run"]
