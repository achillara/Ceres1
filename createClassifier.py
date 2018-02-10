import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
    '2016-05-20',
    api_key='{api_key}')

with open('./SpoiledZip.zip', 'rb') as spoiled, open(
        './GoodZip.zip', 'rb') as good:
    model = visual_recognition.create_classifier(
        'spoiled',
        spoiled_positive_examples=spoiled,
        good_positive_examples=good)
print(json.dumps(model, indent=2))
