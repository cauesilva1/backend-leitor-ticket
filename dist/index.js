"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');   
const app = express();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3003;
app.use(cors());
app.use(express.json());
app.post('/cadastroAluno', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, ra, semestre } = req.body;
    console.log(name, ra, semestre);
    yield prisma.aluno.create({
        data: {
            nome: name,
            ra,
            semestre
        }
    });
    res.json({ ok: true });
}));
app.listen(port, () => {
    console.log(`Pai ta on na porta ${port}`);
});
