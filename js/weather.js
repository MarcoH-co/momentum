function getLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,  // 10초
      maximumAge: 0    // 캐시된 위치 정보를 사용하지 않음
    };
    
    navigator.geolocation.getCurrentPosition(
      successCallback, 
      errorCallback, 
      options
    );
  }
  
  function successCallback(position) {
    console.log("위도:", position.coords.latitude);
    console.log("경도:", position.coords.longitude);
  }
  
  function onGeoError(error) {
    alert("Can't find you");
  }
  
  function errorCallback(error) {
    console.error("위치 정보를 가져올 수 없습니다:", error.code, error.message);
    
    // 오류 코드에 따른 구체적인 메시지
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("위치 정보 접근 권한이 거부되었습니다.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("위치 정보를 사용할 수 없습니다.");
        break;
      case error.TIMEOUT:
        alert("위치 정보 요청 시간이 초과되었습니다.");
        break;
      case error.UNKNOWN_ERROR:
        alert("알 수 없는 오류가 발생했습니다.");
        break;
    }
  }


  navigator.geolocation.getCurrentPosition(
    successCallback, 
    onGeoError
  );