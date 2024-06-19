import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  id: string;
  carData: any;
  km: string;
  numberOfUses: string;
  generalInfo: string;
}

interface CarState {
  cars: Car[];
}

const initialState: CarState = {
  cars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<string>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    // Other actions can be implemented as needed
  },
});

export const { addCar, removeCar } = carSlice.actions;
export default carSlice.reducer;
