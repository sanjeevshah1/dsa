import serial
import cv2
import time
from ultralytics import YOLO

# Serial settings
arduino_port = 'COM5' 
baud_rate = 9600

# Path to trained YOLOv8 model
yolo_model_path = r"best.pt"

# Load YOLO model
model = YOLO(yolo_model_path)

def real_time_yolo_classification(model, arduino):
    cap = cv2.VideoCapture(0g)  # Toggle between cameras
    print("Starting real-time fruit classification with YOLO...")

    while True:
        # Limit frame rate
        time.sleep(0.1)
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame.")
            break

        results = model(frame)[0]  # Perform inference
        annotated_frame = frame.copy()

        # Sort boxes by confidence
        boxes = sorted(results.boxes, key=lambda b: float(b.conf[0]), reverse=True)

        if boxes:  # At least one detection
            box = boxes[0]  # Only take the highest confidence box for labeling and control of segregation
            x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())
            conf = float(box.conf[0])
            cls_id = int(box.cls[0])

            if conf > 0.5:
                if cls_id == 0:  # Ripe Banana
                    label = "Ripe Banana"
                    color = (0, 255, 0)
                    arduino.write(b'0\n')
                elif cls_id == 1:  # Rotten Banana
                    label = "Rotten Banana"
                    color = (0, 0, 255)
                    arduino.write(b'1\n')
                else:
                    label = f"Unknown ({cls_id})"
                    arduino.write(b'2\n')  # No fruit detected
                    color = (255, 255, 255)

                cv2.rectangle(annotated_frame, (x1, y1), (x2, y2), color, 2)
                cv2.putText(annotated_frame, f"{label} ({conf:.2f})", (x1, y1 - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

        # Show the frame
        cv2.namedWindow("YOLO Banana Classification", cv2.WND_PROP_FULLSCREEN)
        cv2.setWindowProperty("YOLO Banana Classification", cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)
        cv2.imshow("YOLO Banana Classification", annotated_frame)
        key = cv2.waitKey(1) & 0xFF

        
        # Manual control for conveyor belt
        if key == ord('f'):
            print("Stopping Conveyor Belt")
            arduino.write(b'3\n')
        elif key == ord('g'):
            print("Starting Conveyor Belt")
            arduino.write(b'4\n')
            print("Conveyor Belt Started")
        elif key == ord('q'):
            break


    cap.release()
    cv2.destroyAllWindows()
    arduino.close()

if __name__ == "__main__":
    arduino = serial.Serial(arduino_port, baud_rate, timeout=1)
    time.sleep(2)  # Time for Arduino reset
    real_time_yolo_classification(model, arduino)


# import serial
# import cv2
# import time
# from ultralytics import YOLO
# from collections import Counter

# # Serial settings
# arduino_port = 'COM3'
# baud_rate = 9600

# # Path to trained YOLOv8 model
# yolo_model_path = r"C:\Users\Nisch\Downloads\Major Project\college_major_project_ssh\Software\yolo_outputs\runs\detect\fruit_freshness\weights\best.pt"

# # Load YOLO model
# model = YOLO(yolo_model_path)

# def real_time_yolo_classification(model, arduino):
#     cap = cv2.VideoCapture(1)  # Toggle between cameras
#     print("Starting real-time fruit classification with YOLO...")

#     detection_list = []
#     banana_detected = False
#     detection_timeout = 0  # Helps in detecting when banana leaves frame

#     while True:
#         time.sleep(0.1)
#         ret, frame = cap.read()
#         if not ret:
#             print("Failed to grab frame.")
#             break

#         results = model(frame)[0]
#         annotated_frame = frame.copy()
#         boxes = sorted(results.boxes, key=lambda b: float(b.conf[0]), reverse=True)

#         detected = False  # Flag to track if banana is in frame

#         if boxes:
#             box = boxes[0]
#             x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())
#             conf = float(box.conf[0])
#             cls_id = int(box.cls[0])

#             if conf > 0.5:
#                 detected = True
#                 label = ""
#                 color = (255, 255, 255)

#                 if cls_id == 0:
#                     label = "Ripe Banana"
#                     color = (0, 255, 0)
#                     detection_list.append(0)
#                 elif cls_id == 1:
#                     label = "Rotten Banana"
#                     color = (0, 0, 255)
#                     detection_list.append(1)
#                 else:
#                     label = f"Unknown ({cls_id})"

#                 cv2.rectangle(annotated_frame, (x1, y1), (x2, y2), color, 2)
#                 cv2.putText(annotated_frame, f"{label} ({conf:.2f})", (x1, y1 - 10),
#                             cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

#         # If detection happened, reset timeout counter
#         if detected:
#             banana_detected = True
#             detection_timeout = 0
#         elif banana_detected:
#             detection_timeout += 1
#             if detection_timeout >= 2:  # Frames without detection before finalizing
#                 if detection_list:
#                     most_common = Counter(detection_list).most_common(1)[0][0]
#                     if most_common == 0:
#                         print("Final Decision: Ripe Banana")
#                         arduino.write(b'0\n')
#                     elif most_common == 1:
#                         print("Final Decision: Rotten Banana")
#                         arduino.write(b'1\n')
#                 # Reset detection tracking
#                 detection_list.clear()
#                 banana_detected = False
#                 detection_timeout = 0

#         # Show the frame
#         cv2.namedWindow("YOLO Banana Classification", cv2.WND_PROP_FULLSCREEN)
#         cv2.setWindowProperty("YOLO Banana Classification", cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)
#         cv2.imshow("YOLO Banana Classification", annotated_frame)
#         key = cv2.waitKey(1) & 0xFF

#         if key == ord('f'):
#             print("Stopping Conveyor Belt")
#             arduino.write(b'3\n')
#         elif key == ord('g'):
#             print("Starting Conveyor Belt")
#             arduino.write(b'4\n')
#             print("Conveyor Belt Started")
#         elif key == ord('q'):
#             break

#     cap.release()
#     cv2.destroyAllWindows()
#     arduino.close()

# if __name__ == "__main__":
#     arduino = serial.Serial(arduino_port, baud_rate, timeout=1)
#     time.sleep(2)
#     real_time_yolo_classification(model, arduino)
