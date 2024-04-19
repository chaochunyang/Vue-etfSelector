<template>
  <div class="col h-100 shadow">
    <div class="table-responsive align-top">
      <table class="table table-bordered table-hover">
        <caption class="text-end text-light">統計截止2023.12.18</caption>
        <tr class="table-primary text-center display-6"><th colspan="3">{{1}}</th></tr>
        <tr>
            <td>ETF 名稱</td>
            <td colspan="2">{{ }}</td>
        </tr>
        <tr>
            <td>追蹤標的</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr>
            <td>市價</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr>
            <td>淨值</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr>
            <td>成交量</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr>
            <td>配息</td>
            <td colspan="2">{{}} </td>
        </tr>
        <tr>
            <td>配息頻率</td>
            <td colspan="2">{{}} </td>
        </tr>
        <tr>
            <td>年報酬率(含息)</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr>
            <td>內扣費用</td>
            <td colspan="2">{{}}%</td>
        </tr>
        <tr>
            <td>受益人數</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr>
            <td>成立年齡</td>
            <td colspan="2">{{}}</td>
        </tr>
        <tr class="table-warning">
            <th scope="row">#</th>
            <th scope="row">前十大持股</th>
            <th scope="row">持股比例</th>
        </tr>
        <tr>
            <td>{{1}} </td>
            <td>{{2}}</td>
            <td>{{3}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
