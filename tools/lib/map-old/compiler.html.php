<?php

function smarty_compiler_html($arrParams,  $smarty){
    $strResourceApiPath = preg_replace('/[\\/\\\\]+/', '/', dirname(__FILE__) . '/lib/FISPagelet.class.php');
    $strFramework = $arrParams['framework'];
    unset($arrParams['framework']);
    $strAttr = '';
    $strCode = '<?php ';
    $strCode .= 'if(!class_exists(\'FISPagelet\')){require_once(\'' . $strResourceApiPath . '\');}';
    if (isset($strFramework)) {
        $strCode .= 'FISResource::setFramework(FISResource::load('.$strFramework.', $_smarty_tpl->smarty));';
    }
    //auto package
    $fid = $arrParams['fid'];
    $sampleRate = $arrParams['sampleRate'];
    unset($arrParams['fid']);
    unset($arrParams['sampleRate']);
    if (isset($fid)){
    	$strCode .= 'FISPagelet::setFid('.$fid.');';	
    }
    if (isset($sampleRate)){
    	$strCode .= 'FISPagelet::setSampleRate('.$sampleRate.');';	
    }
    $strCode .= 'FISPagelet::init();';
    $strCode .= ' ?>';
    foreach ($arrParams as $_key => $_value) {
        if (is_numeric($_key)) {
            $strAttr .= ' <?php echo ' . $_value .';?>';
        } else {
            $strAttr .= ' ' . $_key . '="<?php echo ' . $_value . ';?>"';
        }
    }
    return $strCode . "<html{$strAttr}>";
}

function smarty_compiler_htmlclose($arrParams,  $smarty){
    $template_dir = $smarty->getTemplateDir();
    $template_dir = str_replace('\\', '/', $template_dir[0]);
    $strResourceApiPath = preg_replace('/[\\/\\\\]+/', '/', dirname(__FILE__) . '/lib/FISPagelet.class.php');
    $strCode = '<?php ';
    $strCode .= '$tpl=str_replace("\\\\", "/", $_smarty_tpl->template_resource);';
    $strCode .= 'if(!class_exists(\'FISPagelet\')){require_once(\'' . $strResourceApiPath . '\');}';
    $strCode .= 'FISPagelet::setPageName(str_replace("' . $template_dir . '", "", $tpl));';
    $strCode .= '$_smarty_tpl->registerFilter(\'output\', array(\'FISPagelet\', \'renderResponse\'));';
    $strCode .= '?>';
    $strCode .= '</html>';
    return $strCode;
}
