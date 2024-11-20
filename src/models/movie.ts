import mongoose, { Document, Model, Schema } from 'mongoose';
import User from './user'

export interface IMovie extends Document {
  posterImage: string;
  title: string;
  releaseYear: number;
  created_by: typeof User;
}

const movieSchema: Schema<IMovie> = new Schema(
  {
    posterImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Movie: Model<IMovie> = mongoose.models.Movie || mongoose.model<IMovie>('Movie', movieSchema);

export default Movie;
