FROM python:3.10-slim

WORKDIR /usr/src/app

# Create a group and user
ENV user backend
RUN addgroup --system ${user} --gid 1000 && adduser -u 1000 --gid 1000 --system ${user} 
#&& chown -R ${user} /home/${user}
RUN usermod -aG sudo ${user}

#RUN echo "backend ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER ${user} 
COPY ./backend .
EXPOSE 8000

RUN pip install -r ./ux_analyzer/requirements.txt
