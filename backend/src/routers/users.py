from fastapi import APIRouter, Request

router = APIRouter() 

@router.get("/getUsers")
async def root(request: Request):
  # request name to query
  name = request.query_params.get("name")

  return {"name": name}

export = router