// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "webkitNotifications.requestPermission" beforehand).
*/
function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  var notification = window.webkitNotifications.createNotification(
    '48.png',                      // The image.
    hour + time[2] + ' ' + period, // The title.
    'Time to make the toast.'      // The body.
  );
  notification.show();
}
document.addEventListener('DOMContentLoaded', function () {
							$('.photo').on('click','a',function(){

											
									alert("aaa");

							}
}
