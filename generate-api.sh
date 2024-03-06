docker run --rm -v ${PWD}:/local/app -v $(dirname ${PWD})/api:/local/api \
    openapitools/openapi-generator-cli:v6.0.1 generate \
    -i /local/app/reference/MathMath.yaml \
    -g typescript-fetch \
    -o /local/app/src/api/generated