import QuizFetcher from '../../../src/data_fetchers/QuizFetcher';

describe('QuizFetcherのテスト', () => {
    it('クラスのテスト', () => {
        expect( typeof QuizFetcher ).toStrictEqual('function');
    });

    describe('fetchクラスメソッド', () => {
        it('10件のクイズデータが手に入る', async () => {
            const data = await QuizFetcher.fetch();

            expect( Array.isArray(data.results)).toStrictEqual(true);
            expect( data.results.length ).toStrictEqual(10);
            data.results.forEach(quiz => {
                expect(typeof quiz.category).toStrictEqual('string');
                expect(typeof quiz.type).toStrictEqual('string');
                expect(typeof quiz.difficulty).toStrictEqual('string');
                expect(typeof quiz.question).toStrictEqual('string');
                expect(typeof quiz.correct_answer).toStrictEqual('string');

                expect( Array.isArray(quiz.incorrect_answers)).toStrictEqual(true);
                expect( quiz.incorrect_answers.length ).toStrictEqual(3);
                quiz.incorrect_answers.forEach(incorrectAnswers => {
                    expect(typeof incorrectAnswers).toStrictEqual('string');
                });
            });
        });
    });
});
 