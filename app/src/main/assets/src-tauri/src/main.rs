#[tauri::command]
fn get_app_info() -> String {
    tatskie_app::app_info()
}

#[tauri::command]
fn get_app_status() -> &'static str {
    tatskie_app::commands::application_status()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_app_info,
            get_app_status
        ])
        .run(tauri::generate_context!())
        .expect("Failed to launch TATSKIE-SHARE");
}
