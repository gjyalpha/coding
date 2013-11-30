FILENAME=$1
JS=$(ls | grep ${FILENAME?} | grep '.js$')
DAT=$(ls | grep ${FILENAME?} | grep '.dat$')
node ${JS?} ${DAT?}