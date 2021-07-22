import fs from 'fs';

export const addIdService = (id) => {
  const config = JSON.parse(fs.readFileSync('./server/server.config.json', 'utf-8'));
  if (config.ids.indexOf(String(id)) === -1) {
    config.ids.push(id);
    fs.writeFileSync('./server/server.config.json', JSON.stringify(config));
  }
}

export const isIdExistService = (id) => {
  const config = JSON.parse(fs.readFileSync('./server/server.config.json', 'utf-8'));
  console.log(config);
  return config.ids.indexOf(String(id)) !== -1;
}

export const getAllIdsService = () => {
  const config = JSON.parse(fs.readFileSync('./server/server.config.json', 'utf-8'));
  return config.ids;
}