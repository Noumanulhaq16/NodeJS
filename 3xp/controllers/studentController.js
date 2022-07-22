import {join} from 'path';

export const user = (req, res) => {
  res.sendFile 
}

export const userID = (req, res) => {
    const { hi, bye }=req.query
    res.send(`user ${hi} ${bye}`);
}