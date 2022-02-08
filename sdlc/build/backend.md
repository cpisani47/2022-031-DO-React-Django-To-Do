
## Backend Build

### Run

These steps are required to run the backend after build is completed.

1. Change to backend director `cd backend`
1. Activate venv `source ./venv/bin/activate`
1. Start Development Webserver `python manage.py runserver 22310`

### Fresh Build

These steps are required for a fresh build from the git repository.

1. Change to backend directory `cd backend`
1. Create venv `python3 -m venv venv`
1. Activate venv `source ./venv/bin/activate`
1. Upgrade pip `pip install --upgrade pip`
1. Install dependencies `pip install -r requirements.txt`
1. Run migrations `python manage.py migrate`
1. Create superuser `python manage.py createsuperuser`
1. Start Development Webserver `python manage.py runserver 22310`

### Cleanup

These steps are required to cleanup to working area to go back to the clean repository state.

1. All Users Logoff
1. Change to backend directory `cd backend`
1. Delete venv `rm -rf venv`
1. Delete database `rm -f db.sqlite3`

### Refresh Database

These steps are required to start from an empty database

1. All Users Logoff
1. Change to backend directory `cd backend`
1. Activate venv `source ./venv/bin/activate`
1. Delete database `rm -f db.sqlite3`
1. Run migrations `python manage.py migrate`
1. Create superuser `python manage.py createsuperuser`
1. Start Development Webserver `python manage.py runserver 22310`
