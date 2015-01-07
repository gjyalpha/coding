FILENAME=$1
cp _template.js ${FILENAME?}.js 
touch ${FILENAME?}.dat 
mvim -O ${FILENAME?}.js ${FILENAME?}.dat
