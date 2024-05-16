
set -o errexit

export REACT_APP_RENDER_GIT_COMMIT=$RENDER_GIT_COMMIT

yarn install --force
yarn build