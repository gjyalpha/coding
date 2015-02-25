FILENAME=$1
cp _template.js ${FILENAME?}.js 
touch ${FILENAME?}.dat 
touch ${FILENAME?}.res 
mvim -o ${FILENAME?}.js ${FILENAME?}.dat ${FILENAME?}.res
