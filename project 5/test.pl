sumList(nil, 0).
sumList(cons(X, nil), X).
sumList(cons(Head, Tail), Result) :-
Tail =/ nil,
sumList(cons(Tail, NewTail), NewResult),
Result is Head + NewResult.