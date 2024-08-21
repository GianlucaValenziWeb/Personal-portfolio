<?php
// Metodi statici
class Form
{
    // Campi saltati
    public static function CtrlVuoti()
    {
        foreach ($_POST as $val) {
            if (empty($val))
                return false;
        }
        return true;
    }

    // Select
    public static function Select($start, $end, $mess)
    {
        if (is_numeric($mess)) {
            for ($i = 1945; $i <= 2006; $i++) {
                if ($i == $mess)
                    echo "<option selected>$i</option>";
                else
                    echo "<option>$i</option>";
            }
            return true;
        }
        echo "<option value = ''>$mess</option>";
        for ($i = $start; $i <= $end; $i++) {
            echo "<option>$i</option>";
        }
    }

    // Controlla che la striga abbia una lunghezza minima 
    public static function LimitCar($string, $limit)

    {
        if (strlen($string) < $limit)
            return false;

        return true;
    }

    // Trasforma una stringa 
    public static function StringReal($string)
    {
        $string = trim($string); // spazi
        $string = strtolower($string); // minuscolo
        $string = ucfirst($string);

        return $string;
    }

    // Contollo doppione 
    public static function CtrlDouble($query, $sql)
    // Try catch
    {
        //try
        $stmt = $sql->query($query);

        // ritorna il num. di record che una query eseguita ha trovato
        $tot = $stmt->rowCount();

        return $tot;
    }

    // Controllo sulla password
    public static function CtrlPass($stringPass)
    {

        // Array di caratteri speciali
        $car =  ["$", "%", "&", "£", "!", "?"];

        // car. min. e max.
        if (strlen($stringPass) < 0 & strlen($stringPass) > 30)
            return false;

        // Primo car deve essere un num.
        // if (!is_numeric($stringPass[0]))
        //     return false;

        // Devono essere presenti car. speciali
        for ($i = 0; $i < strlen($stringPass); $i++) {
            if (in_array($stringPass[$i], $car))
                return true;
        }
        return false;
    }

    // Genera codici random 
    public static function RandCode($length)
    {
        $arrcar = ["a", "b", "d", "f", "c", "l", 0, 2, 5, 7, 1, 9, "A", "T", "H", "K"];
        $code = "";

        for ($i = 1; $i < $length; $i++) {
            $rk = rand(0, count($arrcar) - 1); // num. tra 0 e lunghezza array 
            $rc = $arrcar[$rk];
            $code = $code . $rc;
        }
        return $code;
    }
}
?>
<!-- p -->