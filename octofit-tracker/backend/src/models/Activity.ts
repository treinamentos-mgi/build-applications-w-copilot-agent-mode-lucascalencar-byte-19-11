import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  type: { type: String, required: true, trim: true },
  minutes: {
    type: Number,
    required: true,
    min: [1, 'A duração deve ser de pelo menos um minuto.'],
    validate: { validator: Number.isInteger, message: 'A duração deve ser um número inteiro de minutos.' },
  },
  points: {
    type: Number,
    required: true,
    min: [0, 'A pontuação não pode ser negativa.'],
    validate: { validator: Number.isInteger, message: 'A pontuação deve ser um número inteiro.' },
  },
  occurredAt: { type: Date, required: true },
});

export const Activity = model('Activity', activitySchema);
