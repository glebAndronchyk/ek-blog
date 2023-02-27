import {
  transformDataForComments,
  transformDataForCommentsPATCH,
  transformDataForPATCH,
  transformDataForPOST,
  transformDirtyFields,
  transformRegistrationFormData,
} from 'helpers/dataTransformers';
import { getUserDataFromStorage } from 'helpers/localStorage';

const localStorageMock = (function () {
  const store = {
    userData: {
      id: 1,
    },
  };

  return {
    getItem(key) {
      return JSON.stringify(store[key]);
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
const originalToISOString = Date.prototype.toISOString;
// eslint-disable-next-line no-extend-native
Date.prototype.toISOString = jest.fn(() => '2022-01-01T00:00:00.000Z');

describe('dataTransformers', () => {
  afterAll(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line no-extend-native
    Date.prototype.toISOString = originalToISOString;
  });

  describe('transformRegistrationFormData', () => {
    it('returns same data but fullName splitted', () => {
      const testData = {
        age: 5,
        avatar: 'plug',
        email: 'test@test.com',
        fullName: 'test test',
        password: 'pass',
      };
      const expectedOutput = {
        age: 5,
        avatar: 'plug',
        email: 'test@test.com',
        firstname: 'test',
        lastname: 'test',
        password: 'pass',
      };
      const actualOutput = transformRegistrationFormData(testData);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('handles empty full name correctly', () => {
      const inputData = {
        age: 25,
        avatar: 'plug',
        email: 'test@test.com',
        fullName: '',
        password: 'pass',
      };
      const expectedOutput = {
        age: 25,
        avatar: 'plug',
        email: 'test@test.com',
        firstname: '',
        lastname: '',
        password: 'pass',
      };
      const actualOutput = transformRegistrationFormData(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns empty holders if emptyData field dont exists', () => {
      const inputData = {
        age: undefined,
        avatar: undefined,
        email: undefined,
        fullName: undefined,
        password: undefined,
      };
      const expectedOutput = {
        age: null,
        avatar: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
      };
      const actualOutput = transformRegistrationFormData(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('transformDataForPOST', () => {
    it('returns data with userId, createdAt, updatedAt fields', () => {
      const inputData = {
        title: 'title',
        body: 'body',
      };
      const expectedOutput = {
        title: 'title',
        body: 'body',
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      };
      const actualOutput = transformDataForPOST(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns empty holders if inputData fields dont exists', () => {
      const inputData = {
        title: undefined,
        body: undefined,
      };
      const expectedOutput = {
        title: '',
        body: '',
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      };
      const actualOutput = transformDataForPOST(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('transformDataForPATCH', () => {
    it('returns data with title, body, updatedAt while entity is undefined', () => {
      const inputData = {
        title: 'title',
        body: 'body',
      };
      const expectedOutput = {
        title: 'title',
        body: 'body',
        updatedAt: new Date().toISOString(),
      };
      const actualOutput = transformDataForPATCH(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns data with title, body, updatedAt while entity is posts', () => {
      const inputData = {
        title: 'title',
        body: 'body',
      };
      const expectedOutput = {
        title: 'title',
        body: 'body',
        updatedAt: new Date().toISOString(),
        userId: 1,
        createdAt: 'testData',
      };
      const actualOutput = transformDataForPATCH(inputData, 'testData', 'posts');
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns empty strings if data fields undefined', () => {
      const inputData = {
        title: undefined,
        body: undefined,
      };
      const expectedOutput = {
        title: '',
        body: '',
        updatedAt: new Date().toISOString(),
      };
      const actualOutput = transformDataForPATCH(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('transformDataForComments', () => {
    it('returns data with createdAt, updatedAt, userId, postId', () => {
      const inputData = {
        body: 'body',
      };
      const expectedOutput = {
        body: 'body',
        createdAt: new Date().toISOString(),
        updatedAt: null,
        userId: getUserDataFromStorage().id,
        postId: 2,
      };
      const actualOutput = transformDataForComments(inputData, 2);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns empty string if body undefined', () => {
      const inputData = {
        body: '',
      };
      const expectedOutput = {
        body: '',
        createdAt: new Date().toISOString(),
        updatedAt: null,
        userId: getUserDataFromStorage().id,
        postId: 2,
      };
      const actualOutput = transformDataForComments(inputData, 2);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('transformDataForCommentsPATCH', () => {
    it('returns additional updatedAt field', () => {
      const inputData = {
        body: 'body',
      };
      const expectedOutput = {
        body: 'body',
        updatedAt: new Date().toISOString(),
      };
      const actualOutput = transformDataForCommentsPATCH(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns empty string if body undefined', () => {
      const inputData = {
        body: undefined,
      };
      const expectedOutput = {
        body: '',
        updatedAt: new Date().toISOString(),
      };
      const actualOutput = transformDataForCommentsPATCH(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('transformDirtyFields', () => {
    it('returns dirtyFields with firstname and lastname fields when dirtyFields has field fullName', () => {
      const inputData = {
        fullName: 'test test',
        testField: 'field',
      };
      const expectedOutput = {
        firstname: 'test',
        lastname: 'test',
        testField: 'field',
      };
      const actualOutput = transformDirtyFields(inputData);
      expect(actualOutput).toEqual(expectedOutput);
    });

    it('returns given dirtyFields when dirtyFields dont have filed fullName', () => {
      const inputData = {
        testField: 'field',
      };
      const actualOutput = transformDirtyFields(inputData);
      expect(actualOutput).toEqual(inputData);
    });
  });
});
