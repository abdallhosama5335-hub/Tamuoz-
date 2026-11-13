# Total Battle - Game Parameters

ملفات معلمات (Parameters) للعبة Total Battle بلغات متعددة، كل لغة في مجلد مستقل.

> ملاحظة: القيم هنا افتراضية لأغراض التجربة والضبط، وليست البيانات الداخلية الرسمية للعبة.

## البنية

```
python/       game_params.py
javascript/   game_params.js, package.json
java/         GameParams.java
csharp/       GameParams.cs
go/           game_params.go, go.mod
```

## المحتوى

- **الأداء والنظام التقني**: تحديث العالم، الاتصالات، مستويات التفاصيل، مهلة قاعدة البيانات.
- **الأبطال والقادة**: الحد الأقصى للمستوى، منحنى الخبرة، نمو الخصائص، الطاقة، نسب نجاح الترقية.
- **المستويات والاقتصاد**: تكلفة ترقية المباني، إنتاج الموارد، القوة الدنيا لمهاجمة الوحوش.

## الاستخدام

**Python**
```python
from game_params import xp_required, min_might_required
print(xp_required(10), min_might_required(5))
```

**JavaScript**
```js
const { xpRequired, minMightRequired } = require('./game_params');
console.log(xpRequired(10), minMightRequired(5));
```

**Java**
```java
System.out.println(GameParams.xpRequired(10));
```

**C#**
```csharp
Console.WriteLine(GameParams.XpRequired(10));
```

**Go**
```go
xp := config.XPRequired(10)
```

## الترخيص

MIT
