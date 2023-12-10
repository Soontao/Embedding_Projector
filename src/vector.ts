import * as d3 from "d3";
import { dot } from "./vector_util";
/**
 * Generates a vector of the specified size where each component is drawn from
 * a random (0, 1) gaussian distribution.
 */
export function rn(size: number): Float32Array {
  const normal = d3.randomNormal();
  let result = new Float32Array(size);
  for (let i = 0; i < size; ++i) {
    result[i] = normal();
  }
  return result;
}
/**
 *  Projects the vectors to a lower dimension
 *
 * @param vectors Array of vectors to be projected.
 * @param newDim The resulting dimension of the vectors.
 */
export function projectRandom(
  vectors: Float32Array[],
  newDim: number
): Float32Array[] {
  let dim = vectors[0].length;
  let N = vectors.length;
  let newVectors: Float32Array[] = new Array(N);
  for (let i = 0; i < N; ++i) {
    newVectors[i] = new Float32Array(newDim);
  }
  // Make nDim projections.
  for (let k = 0; k < newDim; ++k) {
    let randomVector = rn(dim);
    for (let i = 0; i < N; ++i) {
      newVectors[i][k] = dot(vectors[i], randomVector);
    }
  }
  return newVectors;
}

export * from "./vector_util";
