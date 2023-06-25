/* eslint-disable no-undef */
// "describe" ist eine Funktion, die einen Testblock darstellt. Sie fasst zusammenhängende Tests zusammen.
// Das erste Argument ist eine Zeichenkette, die den Testblock beschreibt, und das zweite Argument ist eine Funktion, die die Tests enthält.
describe('End-to-End Test', () => {
  // "beforeAll" ist eine Funktion, die vor allen Tests in diesem Block ausgeführt wird.
  // In diesem Fall wird die App vor den Tests gestartet.
  beforeAll(async () => {
    await device.launchApp();
  });

  // "it" ist eine Funktion, die einen einzelnen Test darstellt. Das erste Argument ist eine Beschreibung des Tests,
  // und das zweite Argument ist die Testfunktion selbst. "async" bedeutet, dass die Funktion asynchron ausgeführt wird,
  // was notwendig ist, weil die meisten Detox-Funktionen asynchrone Operationen sind.
  it('should show the welcome screen', async () => {
    // "await" wird vor asynchronen Funktionen verwendet, um zu warten, bis sie abgeschlossen sind.
    // "element" wählt ein Element auf dem Bildschirm aus, und "by.text" ist eine Methode, um das Element nach seinem Textinhalt auszuwählen.
    // ".toBeVisible()" ist eine Assertion, die überprüft, ob das ausgewählte Element sichtbar ist.
    await expect(element(by.text('Willkommen'))).toBeVisible();
  });

  it('should show the second screen after tapping next', async () => {
    // Hier wird zuerst das Element mit der testID "nextButton" ausgewählt und dann ".tap()" aufgerufen, um einen Tippvorgang auf dem Element auszulösen.
    await element(by.id('nextButton')).tap();
    // Nachdem auf den Button getippt wurde, wird erwartet, dass der Text "Zweiter Bildschirm" sichtbar ist.
    await expect(element(by.text('Zweiter Bildschirm'))).toBeVisible();
  });
});

/*Die obige Teststruktur wird von Jest bereitgestellt, einem weit verbreiteten Testframework für JavaScript.
Jest stellt Funktionen wie describe, it, beforeAll, expect und andere zur Verfügung, die zum Schreiben von Tests verwendet werden.
Diese Funktionen helfen dabei, Tests in einer strukturierten und lesbaren Art und Weise zu organisieren.

Detox stellt die Funktionen device, element, by und die verschiedenen Assertion-Methoden wie toBeVisible zur Verfügung.
Diese ermöglichen es, Aktionen in der App auszuführen und Zustände zu überprüfen, wie es von einem echten Benutzer erwarten würden.
Diese Funktionen sind spezifisch für das Testen von mobilen Apps und sind das, was Detox so mächtig macht für End-to-End-Tests von React Native Apps.*/

/* In JavaScript ist `async` ein Schlüsselwort, das verwendet wird, um Funktionen zu deklarieren, die asynchrone Operationen ausführen.
Asynchrone Operationen sind solche, die einige Zeit in Anspruch nehmen können und währenddessen anderen Code ausführen lassen, anstatt den gesamten Prozess zu blockieren.
Wenn Sie eine Funktion mit `async` deklarieren, können Sie das Schlüsselwort `await` innerhalb dieser Funktion verwenden.
`await` pausiert die Ausführung der asynchronen Funktion, bis das Promise, das sie erwartet, entweder erfüllt oder abgelehnt wird.
Dabei wird nicht der gesamte JavaScript-Thread blockiert, sondern nur der spezifische asynchrone Funktionsaufruf.
Das bedeutet, dass andere asynchrone Funktionen oder Ereignisse, die gleichzeitig ausgeführt werden, nicht auf das Ergebnis der `await` Operation warten müssen.

In Bezug auf das Detox-Framework sind die meisten Operationen, wie das Tippen auf Elemente, das Warten auf Elemente, um sichtbar zu werden, und so weiter, asynchron.
Sie benötigen etwas Zeit, um abgeschlossen zu werden, und währenddessen kann der Test andere Operationen ausführen oder auf andere Ereignisse reagieren.
Durch die Verwendung von `async` und `await` können wir sicherstellen, dass wir auf das Ende dieser Operationen warten, bevor wir mit dem nächsten Schritt im Test fortfahren.
Dies stellt sicher, dass unsere Tests in der richtigen Reihenfolge ausgeführt werden und dass wir korrekte und zuverlässige Testergebnisse erhalten.*/
