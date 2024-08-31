from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

import os

load_dotenv()

server = FastAPI()

server.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

# import a roouter
from routers import users
server.include_router(users.router)

# to run server -> python src/server.py
# if __name__ = __main__ makes this block only run when this file is executed.
if __name__ == "__main__":
  SERVER_IP = os.environ.get("SERVER_IP")
  import uvicorn
  uvicorn.run("server:server", host=SERVER_IP, port=4000, reload=True)