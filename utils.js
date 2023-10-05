import multer from "multer"
import bcrypt from "bcrypt"
import path from 'path';
import { fileURLToPath } from 'url';


// RUTA TOTAL DE LA CARPETA
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


// MIDLEWARE CARGAR IMAGEN 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

export const uploader = multer({storage})


// CONTRASEÑA ENCRIPTADA
export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const isValidPassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)
