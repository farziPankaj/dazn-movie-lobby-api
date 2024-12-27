import mongoose, { Schema, Document } from 'mongoose';

interface IMovie extends Document {
  title: string;
  description: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

const movieSchema: Schema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  genre: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  streamingLink: { 
    type: String, 
    required: true 
  },
});

export default mongoose.model<IMovie>('Movie', movieSchema);
