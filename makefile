dev:
	docker run -p 3000:3000 -v /app/node_modules -v D:\solid-garden:/app --rm --name solid solid
prod:
	docker-compose up --build
