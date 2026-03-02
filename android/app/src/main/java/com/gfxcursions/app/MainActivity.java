package com.gfxcursions.app;

import android.os.Bundle;
import android.webkit.ValueCallback;
import android.webkit.WebView;

import androidx.activity.OnBackPressedCallback;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
      @Override
      public void handleOnBackPressed() {
        final WebView webView = bridge.getWebView();
        if (webView == null) {
          moveTaskToBack(true);
          return;
        }

        // Ask the SPA (Base44) history first
        webView.evaluateJavascript(
          "(function(){try{return window.history.length || 0;}catch(e){return 0;}})();",
          new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String value) {
              int historyLen = 0;
              try {
                // value usually comes back like "3" (quoted string)
                value = value == null ? "0" : value.replace("\"", "").trim();
                historyLen = Integer.parseInt(value);
              } catch (Exception ignored) {}

              if (historyLen > 1) {
                // SPA navigation (React Router / Base44)
                webView.evaluateJavascript("window.history.back();", null);
              } else if (webView.canGoBack()) {
                // Fallback for real WebView history
                webView.goBack();
              } else {
                // No history: minimize app (more Android-native) or finish()
                moveTaskToBack(true);
              }
            }
          }
        );
      }
    });
  }
}
