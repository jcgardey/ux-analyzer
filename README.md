## Overview
A web application to asssess the user interaction effort of different application pages. The user interaction effort is a score predicted with ML models that take as input different interaction logs called _micro-measures_. UX-Analyzer includes a script that has to be pasted in the target application's frontend to analyze the users interaction events.

## Installation
Developed with [React.js](https://react.dev/) and [Django-rest](https://www.django-rest-framework.org/).

**API**

Run docker container:
`docker-compose up -d`.

Run database migrations:
`docker exec backend python manage.py migrate`.

**Frontend**

Install dependencies
`cd frontend/ && npm i`.

Start local server:
`npm run start`.

Point your browser to <http://localhost:3000>.


## Research
UX-Analyzer was developed at [LIFIA](https://lifia.info.unlp.edu.ar/) (UNLP, Argentina) research labs. Read more about it:

[An Interaction Effort Score for Web Pages](https://www.scitepress.org/PublicationsDetail.aspx?ID=2auIjTuC36I=&t=1)

[Predicting interaction effort in web interface widgets](https://doi.org/10.1016/j.ijhcs.2022.102919)

[One Metric for All: Calculating Interaction Effort of Individual Widgets](https://dl.acm.org/doi/10.1145/3290607.3312902)