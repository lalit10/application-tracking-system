# python base image in the container from Docker Hub
#
FROM ubuntu:18.04
FROM python:3.7.9-slim

# copy files to the /app folder in the container
COPY . .
RUN ls
RUN pip install -r requirements.txt
COPY /backend/requirements.txt ./requirements-backend.txt


# install the packages from the Pipfile in the container
RUN pip install -r requirements-backend.txt


# set the working directory in the container to be /src
WORKDIR /backend

#RUN pipenv install --system --deploy --ignore-pipfile

# expose the port that uvicorn will run the app on
ENV PORT=5000
EXPOSE 5000

# execute the command python main.py (in the WORKDIR) to start the app
#CMD ["flask", "run", "--host", "0.0.0.0" ]
CMD [ "python", "./app.py" ]