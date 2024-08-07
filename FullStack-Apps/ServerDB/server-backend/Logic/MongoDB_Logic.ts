import { SongValidationError, CategoryValidationError } from "../Models/AppErrors";
import { InterfaceCategoryModel } from "../Models/CategoryMongoDB";
import SongModel, { InterfaceSongModel } from "../Models/SongMongoDB";

const addCategory = (newCategory: InterfaceCategoryModel): Promise<InterfaceCategoryModel> => {
  const error = newCategory.validateSync();
  if (error) throw new CategoryValidationError(error.message);
  return newCategory.save();
};

const addSong = (newSong: InterfaceSongModel): Promise<InterfaceSongModel> => {
  const error = newSong.validateSync();
  if (error) throw new SongValidationError(error.message);
  return newSong.save();
};

const getAllSongs = async (): Promise<InterfaceSongModel[]> => {
  return SongModel.find().populate("category").exec();
};

const getSongById = async (id: string): Promise<InterfaceSongModel | null> => {
  return SongModel.findById(id).populate("category").exec();
};

const updateSong = async (song: InterfaceSongModel): Promise<InterfaceSongModel | null> => {
  return SongModel.findByIdAndUpdate(song._id, song, { new: true }).populate("category").exec();
};

const deleteSong = async (id: string): Promise<InterfaceSongModel | null> => {
  return SongModel.findByIdAndDelete(id).populate("category").exec();
};

const getSongTitleAndUrl = async (): Promise<InterfaceSongModel[]> => {
  return SongModel.find({}, { title: 1, url: 1, _id: 0 }).exec();
};

export { addCategory, addSong, getAllSongs, getSongById, updateSong, deleteSong, getSongTitleAndUrl };

/*
    SQL : SELECT * FROM songs WHERE category=1;
    MongoDB : return SongModel.find({category:1}).exec();

    SQL : SELECT * FROM songs WHERE category=1 AND title="song1";
    MongoDB : return SongModel.find({category:1,title:"song1"}).exec();

    SQL : SELECT * FROM songs WHERE category=5 OR name="song1";
    MongoDB : return SongModel.find({$OR:[{category:5},{title:"song1"}]}).exec();

    SQL : SELECT * FROM songs WHERE likes BETWEEN 100 AND 200;
    MongoDB : return SongModel.find({likes:{$gte:100,$lte:200}}).exec();

    SQL : SELECT category,name FROM songs WHERE category BETWEEN 1 AND 3;
    MongoDB : return SongModel.find({category:{$gte:1,$lte:3}}).exec();

    SQL : SELECT * FROM songs WHERE category BETWEEN 1 AND 3 ORDER BY category ASC, name DESC;
    MongoDB : return SongModel.find({category:{$gte:1,$lte:3}}).sort({category:1,name:-1}).exec();

    SQL : SELECT * FROM songs LIMIT 30 SKIP 10;
    MongoDB : return SongModel.find().skip(10).limit(30).exec();

    SQL : INNER JOIN songs ON songs.category=categories.id;
        : SELECT Songs.* name as CategoryName
        : FROM songs JOIN categories
        : ON songs.category=category.id
    MongoDB : return SongModel.find({categoryid:{$ne:null}}).populate("category").exec();
*/
