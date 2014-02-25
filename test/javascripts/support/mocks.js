function mockRegistrations(){
  $.mockjax({
    url: '/api/v1/registrations',
    responseText: {
      status: 'success'
    }
  });
}

function mockSignin(){
  $.mockjax({
    url: '/api/v1/sign_in',
    responseText: {
      access_token:"f9EEz7qsrEGkkN8YrxGt",
      token_type:"bearer",
      user:{user:{"id":1,"username":'test'}}
    }
  });
}

function mockDashboard(){
  $.mockjax({
    url: '/api/v1/dashboards/1',
    responseText: {
      dashboard: {"id": 1, "mit_ids": [1], "mit_stats":["{\"count\":1,\"date\":\"2014-02-11\",\"complete\":false,\"id\":null}","{\"count\":5,\"date\":\"2014-02-11\",\"complete\":true,\"id\":null}","{\"count\":1,\"date\":\"2014-02-14\",\"complete\":true,\"id\":null}"]},
      mits: [{"id":1, "title": 'AwesomeTitle'}]
    }
  });
}

function mockLogout(){
  $.mockjax({
    url: 'api/v1/sign_out',
    type: 'post',
    responseText: {
      status: 'success'
    }
  })
}

function mockMitsNew(){
  $.mockjax({
    url: '/api/v1/mits',
    type: 'post',
    responseText: {
      mit: {'id':1, 'title': 'Best mit ever'}
    }
  });
}

function mockMits(){
  $.mockjax({
    url: '/api/v1/mits',
    type: 'get',
    responseText: {
      mits: []
    }
  })
}
