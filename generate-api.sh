docker run --rm -v ${PWD}/frontend/reference:/local/reference -v ${PWD}:/local/app \
    openapitools/openapi-generator-cli:v6.0.1 generate \
    -i /local/app/reference/MathMath.yaml \
    -g typescript-fetch \
    -o /local/app/src/api/generated