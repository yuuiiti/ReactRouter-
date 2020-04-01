import Quiz from '../../../src/models/Quiz';

const createMockQuiz = () => {
    return {
        question: 'クイズの問題',
        correctAnswer: '答え',
        incorrectAnswers: [
            '不正解1',
            '不正解2',
            '不正解3'
        ],
    }
}

describe('Quizクラスのテスト', () => {
    it('importチェック', () => {  
        expect( typeof Quiz ).toStrictEqual('function');
    });

    describe('インスタンスメソッド', () => {
        it('constructor', () => {
            const quizData = createMockQuiz();
            const quiz = new Quiz(quizData);

            expect( quiz._quesetion ).toStrictEqual(quizData.question);
            expect( quiz._correctAnswer ).toStrictEqual(quizData.correctAnswer);
            expect( quiz._incorrectAnswers ).toStrictEqual(quizData.incorrectAnswers);
        });
    });

    describe('getter', () => {
        it('quesetionとcorrectAnswerのgetterが使える', () => {
            const quizData = createMockQuiz();
            const quiz = new Quiz(quizData);

            expect( quiz.question ).toStrictEqual(quizData.question);
            expect( quiz.correctAnswer ).toStrictEqual(quizData.correctAnswer);
            expect( quiz.incorrectAnswers ).toStrictEqual(undefined);
        });
    });

    describe('shuffle', () => {
        it('シャッフルされる', () => {
            const quizData = createMockQuiz();
            const quiz = new Quiz(quizData);

            const shuffledAnswer1 = quiz.shuffledAnswers();
            const shuffledAnswer2 = quiz.shuffledAnswers();
            expect( shuffledAnswer1).not.toStrictEqual(undefined);
        });
    });
    
    describe('judgeCorrectAnswerメソッド', () => {
        it('引数の値が正解ならtrue、不正解ならfalseが返る', () => {
            const quizData = createMockQuiz();
            const quiz = new Quiz(quizData);

            expect( quiz.judgeCorrectAnswer(quizData.correctAnswer))
                .toStrictEqual(true);

            quizData.incorrectAnswers.forEach(incorrectAnswers => {
                expect( quiz.judgeCorrectAnswer(incorrectAnswers) )
                .toStrictEqual(false);
            })

        });
    });
    
    describe('クラスメソッド', () => {
        describe('fetchAndCreateQuizzesメソッド', () => {
            it('10件のQuizインスタンスが返る', async　() => {
                const quizzes = await Quiz.fetchAndCreateQuizzes();
    
                expect( Array.isArray(quizzes) ).toStrictEqual(true);
                expect( quizzes.length ).toStrictEqual(10);
                quizzes.forEach(quiz => {
                    expect( quiz instanceof Quiz).toStrictEqual(true); 
                });
            });
        });
    });
});