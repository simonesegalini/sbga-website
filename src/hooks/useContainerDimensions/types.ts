export interface Dimensions {
  width: number | undefined;
  height: number | undefined;
}

export type MovementTimer = ReturnType<typeof setTimeout> | null;
