import { Dimensions } from './com_dimensions';
import { Draw } from './com_draw';
import { Movement } from './com_movement';
import { Transform } from './com_transform';

export const enum Get {
    Transform,
    Draw,
    Dimensions,
    Movement,
}

export interface ComponentData {
    [Get.Transform]: Array<Transform>;
    [Get.Draw]: Array<Draw>;
    [Get.Dimensions]: Array<Dimensions>;
    [Get.Movement]: Array<Movement>;
}

export const enum Has {
    Transform = 1 << Get.Transform,
    Draw = 1 << Get.Draw,
    Dimensions = 1 << Get.Dimensions,
    Movement = 1 << Get.Movement,
}