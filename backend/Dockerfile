FROM python:3.9

WORKDIR /app

COPY requirements.txt .

RUN python -m venv /opt/venv

RUN pip install -r requirements.txt --no-cache-dir --timeout=2500

COPY . .

EXPOSE 5000

CMD ["flask", "run"]
