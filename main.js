// 課題1: 配列を作る
//   - 先頭から「1, 2, 3, 4, 5」の値を持つ配列を作る
//   - 配列を保存する変数の名前は「array1」とする
//   - 配列を作成したらconsole.logで配列の内容を出力する
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
// 課題2: 課題1で作成した配列の内、インデックス要素が3番目の値を表示する
//   - 出力される値は `4` になる
console.log(array1[3]);

// 課題3: 課題1で作成した配列の内、インデックス要素が1番目の値を更新する
//   - 更新する値は999とする
//   - 更新後の配列の中の並びが「1, 999, 3, 4, 5」になる
//   - 更新後の「array1」全体をconsole.logを使って表示する
array1[1] = 999;
console.log(array1);
// 課題4: 2次元配列を作る
//   - 2次元配列を保存する変数の名前は「array2」とする
//   - 2次元配列内容は以下のとおりとする
//     - 0番目の要素が「1, 2, 3」
//     - 1番目の要素が「4, 5, 6」
//     - 2番目の要素が「7, 8, 9」
//   - 2次元配列を作成したらconsole.logで配列の内容を出力する
const array2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array2);
// 課題5: 課題4で作成した2次元配列の内、インデックス要素が2番目の配列を出力する
//   - console.logを使ってデベロッパーツールに出力する([7, 8, 9]が出力される)
console.log(array2[2]);

// 課題6: 課題4で作成した2次元配列の内、インデックス要素が1番目の配列の中の、インデックス要素が0番目の値を出力する
//   - console.logを使ってデベロッパーツールに出力する('4'が出力される)
console.log(array2[1][0]);

// 課題7: 新しい配列を作り、配列の組み込みメソッドを使って、配列の末尾に値を追加する
//   - 変数名はarray3とする
//   - 変数に保存する配列の内容は「'コメント1', 'コメント2', 'コメント3'」とする
//   - 配列の末尾に追加する値は「'コメント4'」とする
//   - 配列の末尾に値を追加する際には、配列の組み込みメソッドである「push」を使う
//   - 値を配列の末尾に追加する前と追加した後の結果をconsole.logで出力して、'コメント4'が追加されていることを確認する
const array3 = ['コメント1', 'コメント2', 'コメント3'];
console.log('末尾に値を追加する前：', array3);
array3.push('コメント4');
console.log('末尾に値を追加した後：', array3);
// 課題8: 新しい配列を作り、配列の組み込みメソッドを使って、配列の末尾の値を取り除く
//   - 変数名はarray4とする
//   - 変数に保存する配列の内容は「'タスク1', 'タスク2', 'タスク3'」とする
//   - 配列の末尾から値を取り除く際には、配列の組み込みメソッドである「pop」を使う
//   - 「pop」を使って取り除いた値は変数「poppedValue」に代入する
//   - 値を配列の末尾から取り除く前と取り除いた後の結果をconsole.logで出力する
//   - 変数「poppedValue」をconsole.logで出力して、'タスク3'が表示されることを確認する
const array4 = ['タスク1', 'タスク2', 'タスク3'];
console.log('末尾から値を取り除く前：', array4);
const poppedValue = array4.pop();
console.log('末尾から値を取り除いた後：', array4);
console.log('poppedValueは「タスク3」であるはず：', poppedValue);
// 課題9: 新しい配列を作り、配列の組み込みメソッドを使って、配列の先頭に値を追加する
//   - 変数名はarray5とする
//   - 変数に保存する配列の内容は「'タスク1', 'タスク2', 'タスク3'」とする
//   - 配列の先頭に追加する値は「'最優先タスク'」とする
//   - 配列の先頭に値を追加する際には、配列の組み込みメソッドである「unshift」を使う
//   - 値を配列の先頭に追加する前と追加した後の結果をconsole.logで出力して、'最優先タスク' が追加されていることを確認する
const array5 = ['タスク1', 'タスク2', 'タスク3'];
console.log('先頭に値を追加する前：', array5);
array5.unshift('最優先タスク');
console.log('先頭に値を追加した後：', array5);
// 課題10: 新しい配列を作り、配列の組み込みメソッドを使って、配列の先頭の値を取り除く
//   - 変数名はarray6とする
//   - 変数に保存する配列の内容は「'タスク1', 'タスク2', 'タスク3'」とする
//   - 配列の先頭から値を取り除く際には、配列の組み込みメソッドである「shift」を使う
//   - 「shift」を使って取り除いた値は変数「shiftedValue」に代入する
//   - 値を配列の先頭から取り除く前と取り除いた後の結果をconsole.logで出力する (出力結果が異なることを確認する)
//   - 変数「shiftedValue」をconsole.logで出力して、'タスク1' が表示されることを確認する
const array6 = ['タスク1', 'タスク2', 'タスク3'];
console.log('先頭から値を取り除く前：', array6);
const shiftedValue = array6.shift();
console.log('先頭から値を取り除いた後：', array6);
console.log('shiftedValueは「タスク1」であるはず：', shiftedValue);