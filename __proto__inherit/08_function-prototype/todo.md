1. Створити функцію `Character`, яка створює об'єкт з властивостями` name: string` і `hp: number = 100`.

2. В прототип `Character` додати метод` greet`, який буде повертати рядок привітання 'Вітаю!'

3. Створити функцію `Warrior`, яка створює об'єкт з властивостями` name: string`, `hp: number = 100`,` weapon: string` і `stamina: number = 100`.
Для ініціалізації властивостей `name` і` hp` скористайтеся функцією `Character`.

4. Зв'язати прототип `Warrior` з прототипом` Character`.
Конструктором прототипу `Warrior` зробити функцію` Warrior`.

5. В прототип `Warrior` додати метод` attack`, який:
    * Приймає в якості аргументу персонажа,
    * Знімає йому здоров'я (випадкове число від 1 до 10),
    * Забирає 10 одиниць Стаміни,
    * Повертає завдану шкоду

6. Створити функцію `Knight`, яка створює об'єкт з властивостями` name: string`, `hp: number = 100`,` weapon: string`, `stamina: number = 100` і` mp: number = 100`.
Для ініціалізації властивостей `name`,` hp`, `weapon` і` stamina`, поспользуйтесь функцією `Warrior`.

7. Зв'язати прототип `Knight` з прототипом` Warrior`.
Конструктором прототипу `Knight` зробити функцію` Knight`.

8. В прототип `Knight` додати метод` heal`, який:
    * Приймає в якості аргументу персонажа,
    * Відновлює йому здоров'я (випадкове число від 1 до 10),
    * Забирає 10 одиниць мани,
    * Повертає завдану шкоду