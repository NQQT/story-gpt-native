import { describe, expect, test } from '@jest/globals';
import { DeepAI } from './DeepAI';

describe('Testing DeepAI', () => {
  test('creation of DeepAI Object', () => {
    const conversation = new DeepAI('test');
    expect(conversation).toBeInstanceOf(DeepAI);
  });
});
