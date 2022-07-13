from fastapi import FastAPI
from businesses import yelp_router

app = FastAPI()

app.include_router(yelp_router)


@app.get("/")
def read_root():
    return {"Testing": "123"}
