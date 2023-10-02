# Используем Node.js в качестве базового образа
FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json внутрь контейнера
COPY package.json package-lock.json ./

# Устанавливаем зависимости приложения
RUN npm ci

COPY . .

# Собираем приложение
RUN npm run build

# Открываем порт, на котором будет работать приложение SolidJS
EXPOSE 3000

# Команда, которая будет выполнена при запуске контейнера
CMD ["node", "dist/server.js"]