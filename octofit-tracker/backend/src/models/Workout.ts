import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: { type: String, required: true, trim: true },
  focus: { type: String, required: true, trim: true },
  minutes: {
    type: Number,
    required: true,
    min: [1, 'A duração deve ser de pelo menos um minuto.'],
    validate: { validator: Number.isInteger, message: 'A duração deve ser um número inteiro de minutos.' },
  },
  difficulty: { type: String, required: true, trim: true },
});

export const Workout = model('Workout', workoutSchema);
