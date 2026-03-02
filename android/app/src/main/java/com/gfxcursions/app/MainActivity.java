package com.gfxcursions.app;

import android.os.Bundle;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Handle Android hardware back button for WebView navigation
    this.getOnBackPressedDispatcher().addCallback(this, new androidx.activity.OnBackPressedCallback(true) {
      @Override
      public void handleOnBackPressed() {
        try {
          WebView webView = (WebView) bridge.getWebView();
          if (webView != null && webView.canGoBack()) {
            webView.goBack();
          } else {
            // No history: exit the app
            finish();
          }
        } catch (Exception e) {
          finish();
        }
      }
    });
  }
}
